package br.com.fiap.cponline.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.cponline.models.Questao;

public interface QuestaoRepository extends JpaRepository<Questao, Integer> {

    Page<Questao> findByEnunciadoContaining(String enunciado, Pageable pageable);

}
