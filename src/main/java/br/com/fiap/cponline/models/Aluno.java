package br.com.fiap.cponline.models;

import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.EntityModel;

import br.com.fiap.cponline.controllers.AlunoController;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Entity
@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @NotBlank
    private String nome;
    @Email
    @NotBlank
    private String email;
    @Pattern(regexp = "[0-9]*8")
    @NotBlank
    private String senha;
    @NotNull
    @NotBlank
    private String instituicao;

    public EntityModel<Aluno> toEntityModel() {
        return EntityModel.of(
            this,
            linkTo(methodOn(AlunoController.class).show(id)).withSelfRel(),
            linkTo(methodOn(AlunoController.class).destroy(id)).withRel("delete"),
            linkTo(methodOn(AlunoController.class).index(null, Pageable.unpaged())).withRel("all")
        );

    }

    @Override
    public String toString() {
        return "Aluno [id=" + id + ", nome=" + nome + ", email=" + email + ", senha=" + senha + ", instituicao="
                + instituicao + "";

    }

}
