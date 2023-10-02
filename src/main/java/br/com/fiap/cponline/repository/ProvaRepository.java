package br.com.fiap.cponline.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.cponline.models.Prova;

public interface ProvaRepository extends JpaRepository<Prova, Integer> {

    Page<Prova> findByDescricaoContaining(String descricao, Pageable pageable);

}
