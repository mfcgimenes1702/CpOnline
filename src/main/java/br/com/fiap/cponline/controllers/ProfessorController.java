package br.com.fiap.cponline.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.cponline.exceptions.RestNotFoundException;
import br.com.fiap.cponline.models.Professor;
import br.com.fiap.cponline.repository.ProfessorRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/professor/")
public class ProfessorController {

    Logger log = LoggerFactory.getLogger(ProfessorController.class);

    @Autowired
    ProfessorRepository repository;

    @Autowired
    PagedResourcesAssembler<Object> assembler;

    @GetMapping
    public PagedModel<EntityModel<Object>> index(@RequestParam(required = false) String nome,
            @PageableDefault(size = 2) Pageable pageable) {
        Page<Professor> professor = (nome == null) ? repository.findAll(pageable)
                : repository.findByNomeContaining(nome, pageable);

        return assembler.toModel(professor.map(Professor::toEntityModel));

    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody @Valid Professor professor) {

        log.info("Cadastrando o Professor" + professor);

        int idCadastrado = repository.save(professor).getId();

        professor.setId(idCadastrado);

        return ResponseEntity
                .created(professor.toEntityModel().getRequiredLink("self").toUri())
                .body(professor.toEntityModel());
    }

    @GetMapping("{id}")
    public EntityModel<Professor> show(@PathVariable int id) {
        log.info("buscar o Professor" + id);

        var professor = repository.findById(id)
                .orElseThrow(() -> new RestNotFoundException("Professor não encontrado"));

        return professor.toEntityModel();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Professor> destroy(@PathVariable int id) {
        log.info("Apagar Professor" + id);

        var professor = repository.findById(id)
                .orElseThrow(() -> new RestNotFoundException("Professor não encontrado"));

        repository.delete(professor);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("{id}")
    public EntityModel<Professor> update(@PathVariable int id, @RequestBody @Valid Professor professor) {
        log.info("Atualizando Professor" + id);

        repository.findById(id).orElseThrow(() -> new RestNotFoundException("Professor não encontrado"));

        professor.setId(id);
        repository.save(professor);

        return (professor.toEntityModel());
    }
}