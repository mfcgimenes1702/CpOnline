package br.com.fiap.cponline.models;

import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.EntityModel;

import br.com.fiap.cponline.controllers.ProfessorController;
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

@Data
@NoArgsConstructor
@Entity
@Builder
@AllArgsConstructor
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
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

    public EntityModel<Professor> toEntityModel() {
        return EntityModel.of(
            this,
            linkTo(methodOn(ProfessorController.class).show(id)).withSelfRel(),
            linkTo(methodOn(ProfessorController.class).destroy(id)).withRel("delete"),
            linkTo(methodOn(ProfessorController.class).index(null, Pageable.unpaged())).withRel("all")
        );

    }

    @Override
    public String toString() {
        return "Professor [id=" + id + ", nome=" + nome + ", email=" + email + ", senha=" + senha + ", instituicao="
                + instituicao + "]";
    }

}
