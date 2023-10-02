package br.com.fiap.cponline.models;

import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.EntityModel;

import br.com.fiap.cponline.controllers.QuestaoController;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Data
@NoArgsConstructor
@Entity
public class Questao {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        @NotNull
        @NotBlank
        @Size(min = 1, max = 2000)
        private String enunciado;

        @NotNull
        @NotBlank
        @Size(min = 1, max = 2000)
        private String alternativaA;

        @NotNull
        @NotBlank
        @Size(min = 1, max = 2000)
        private String alternativaB;

        @NotNull
        @NotBlank
        @Size(min = 1, max = 2000)
        private String alternativaC;

        @NotNull
        @NotBlank
        @Size(min = 1, max = 2000)
        private String alternativaD;

        @NotNull
        @NotBlank
        @Size(min = 1, max = 2000)
        private String alternativaE;

        @NotNull
        @NotBlank
        @Size(min = 1, max = 2000)
        private String alternativaCorreta;

        public EntityModel<Questao> toEntityModel() {
                return EntityModel.of(
                        this,
                        linkTo(methodOn(QuestaoController.class).show(id)).withSelfRel(),
                        linkTo(methodOn(QuestaoController.class).destroy(id)).withRel("delete"),
                        linkTo(methodOn(QuestaoController.class).index(null, Pageable.unpaged())).withRel("all")
                );

        }

        @Override
        public String toString() {
                return "Questao [id=" + id + ", enunciado=" + enunciado + ", alternativaA=" + alternativaA
                                + ", alternativaB="
                                + alternativaB + ", alternativaC=" + alternativaC + ", alternativaD=" + alternativaD
                                + ", alternativaE="
                                + alternativaE + ", alternativaCorreta=" + alternativaCorreta + "]";
        }

        public Questao(String enunciado, String alternativaA, String alternativaB, String alternativaC,
                        String alternativaD, String alternativaE, String alternativaCorreta) {
                this.enunciado = enunciado;
                this.alternativaA = alternativaA;
                this.alternativaB = alternativaB;
                this.alternativaC = alternativaC;
                this.alternativaD = alternativaD;
                this.alternativaE = alternativaE;
                this.alternativaCorreta = alternativaCorreta;
        }

}
