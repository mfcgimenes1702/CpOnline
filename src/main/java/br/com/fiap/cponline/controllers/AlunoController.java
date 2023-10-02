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
import br.com.fiap.cponline.models.Aluno;
import br.com.fiap.cponline.repository.AlunoRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/aluno/")
public class AlunoController {

    Logger log = LoggerFactory.getLogger(AlunoController.class);

    @Autowired
    AlunoRepository repository;

    @Autowired
    PagedResourcesAssembler<Object> assembler;

    @GetMapping
    public PagedModel<EntityModel<Object>> index(@RequestParam(required = false) String nome,
            @PageableDefault(size = 2) Pageable pageable) {
        Page<Aluno> aluno = (nome == null) ? repository.findAll(pageable)
                : repository.findByNomeContaining(nome, pageable);

        return assembler.toModel(aluno.map(Aluno::toEntityModel));

    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody @Valid Aluno aluno) {
        log.info("Cadastrando o Aluno" + aluno);

        int idCadastrado = repository.save(aluno).getId();

        aluno.setId(idCadastrado);

        return ResponseEntity
                .created(aluno.toEntityModel().getRequiredLink("self").toUri())
                .body(aluno.toEntityModel());
    }

    @GetMapping("{id}")
    public EntityModel<Aluno> show(@PathVariable int id) {
        log.info("buscar o Aluno" + id);

        var aluno = repository.findById(id)
                .orElseThrow(() -> new RestNotFoundException("Aluno não encontrado"));

        return aluno.toEntityModel();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Aluno> destroy(@PathVariable int id) {
        log.info(" Apagar Aluno" + id);

        var aluno = repository.findById(id)
                .orElseThrow(() -> new RestNotFoundException("Aluno não encontrado"));

        repository.delete(aluno);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("{id}")
    public EntityModel<Aluno> update(@PathVariable int id, @RequestBody @Valid Aluno aluno) {
        log.info("Atualizando Aluno" + id);

        repository.findById(id).orElseThrow(() -> new RestNotFoundException("Aluno não encontrado"));

        aluno.setId(id);
        repository.save(aluno);

        return (aluno.toEntityModel());
    }
}
