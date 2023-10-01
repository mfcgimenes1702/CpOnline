package br.com.fiap.cponline.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.cponline.models.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Integer> {

    Page<Professor> findByNomeContaining(String nome, Pageable pageable);

}
