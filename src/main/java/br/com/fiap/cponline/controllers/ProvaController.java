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
import br.com.fiap.cponline.models.Prova;
import br.com.fiap.cponline.repository.ProvaRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/prova/")

public class ProvaController {

    Logger log = LoggerFactory.getLogger(ProvaController.class);

    @Autowired
    ProvaRepository repository;

    @Autowired
    PagedResourcesAssembler<Object> assembler;

    @GetMapping
    public PagedModel<EntityModel<Object>> index(@RequestParam(required = false) String descricao,
            @PageableDefault(size = 2) Pageable pageable) {

        Page<Prova> prova = (descricao == null) ? repository.findAll(pageable)
                : repository.findByDescricaoContaining(descricao, pageable);

        return assembler.toModel(prova.map(Prova::toEntityModel));

    }

    @PostMapping
    public ResponseEntity<EntityModel<Prova>> create(@RequestBody @Valid Prova prova) {
        log.info("Cadastrando a Prova" + prova);

        int idCadastrado = repository.save(prova).getId();

        prova.setId(idCadastrado);

        return ResponseEntity
                .created(prova.toEntityModel().getRequiredLink("self").toUri())
                .body(prova.toEntityModel());
    }

    @GetMapping("{id}")
    public EntityModel<Prova> show(@PathVariable int id) {
        log.info("buscar a Prova" + id);

        var prova = repository.findById(id)
                .orElseThrow(() -> new RestNotFoundException("Prova não encontrado"));

        return prova.toEntityModel();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Prova> destroy(@PathVariable int id) {
        log.info("buscar a Prova" + id);

        var prova = repository.findById(id)
                .orElseThrow(() -> new RestNotFoundException("Prova não encontrado"));

        repository.delete(prova);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("{id}")
    public EntityModel<Prova> update(@PathVariable int id, @RequestBody @Valid Prova prova) {
        log.info("Atualizando Prova" + id);

        repository.findById(id).orElseThrow(() -> new RestNotFoundException("Prova não encontrado"));

        prova.setId(id);
        repository.save(prova);

        return prova.toEntityModel();
    }

}
