package br.com.fiap.cponline.models;

import java.time.LocalDate;

import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.EntityModel;

import br.com.fiap.cponline.controllers.ProvaController;
import br.com.fiap.cponline.controllers.QuestaoController;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Data
@NoArgsConstructor
@Entity
@Builder
@AllArgsConstructor
public class Prova {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @NotBlank
    @Size(min = 5, max = 2000)
    private String descricao;

    @NotNull
    @NotBlank
    @Size(min = 6, max = 500)
    private String urlAcesso;

    @NotNull
    private LocalDate data;

    @NotNull
    private boolean ativo;

    @ManyToOne
    private Questao questao;

    public EntityModel<Prova> toEntityModel() {
        return EntityModel.of(
            this,
            linkTo(methodOn(ProvaController.class).show(id)).withSelfRel(),
            linkTo(methodOn(ProvaController.class).destroy(id)).withRel("delete"),
            linkTo(methodOn(ProvaController.class).index(null, Pageable.unpaged())).withRel("all"),
            linkTo(methodOn(QuestaoController.class).show(questao.getId())).withRel("questao")
        );
    }

    @Override
    public String toString() {
        return "Prova [id=" + id + ", descricao=" + descricao + ", urlAcesso=" + urlAcesso + ", data=" + data
                + ", ativo=" + ativo + "";
    }

}
