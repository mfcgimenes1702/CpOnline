package br.com.fiap.cponline.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.time.LocalDate;
import java.util.List;

import br.com.fiap.cponline.models.Aluno;
import br.com.fiap.cponline.models.Professor;
import br.com.fiap.cponline.models.Prova;
import br.com.fiap.cponline.models.Questao;
import br.com.fiap.cponline.repository.AlunoRepository;
import br.com.fiap.cponline.repository.ProfessorRepository;
import br.com.fiap.cponline.repository.ProvaRepository;
import br.com.fiap.cponline.repository.QuestaoRepository;

@Configuration
@Profile("dev")
public class DatabaseSeeder implements CommandLineRunner {

        @Autowired
        QuestaoRepository questaoRepository;

        @Autowired
        AlunoRepository alunoRepository;

        @Autowired
        ProfessorRepository professorRepository;

        @Autowired
        ProvaRepository provaRepository;

        @Override
        public void run(String... args) throws Exception {

                questaoRepository.saveAll(List.of(

                                new Questao(
                                                "Qual o valor da Soma de 2 + 2",
                                                "2",
                                                "4",
                                                "6",
                                                "8",
                                                "10",
                                                "4"),

                                new Questao(
                                                "Qual o valor da Soma de 4 + 4",
                                                "2",
                                                "4",
                                                "6",
                                                "8",
                                                "10",
                                                "8"),

                                new Questao(
                                                "Qual o valor da Soma de 3 + 3",
                                                "2",
                                                "4",
                                                "6",
                                                "8",
                                                "10",
                                                "6")));

                alunoRepository.saveAll(List.of(
                                Aluno.builder()
                                                .nome("Marcelo Gimenes")
                                                .email("rm93897@fiap.com.br")
                                                .senha("12345678")
                                                .instituicao("Fiap")
                                                .build(),

                                Aluno.builder()
                                                .nome("Gustavo Balero")
                                                .email("rm93090@fiap.com.br")
                                                .senha("12345678")
                                                .instituicao("Fiap")
                                                .build(),

                                Aluno.builder()
                                                .nome("Breno Massa")
                                                .email("rm93797@fiap.com.br")
                                                .senha("12345678")
                                                .instituicao("Fiap")
                                                .build()));

                professorRepository.saveAll(List.of(
                                Professor.builder()
                                                .nome("Abreu")
                                                .email("pf93897@fiap.com.br")
                                                .senha("12345678")
                                                .instituicao("Fiap")
                                                .build(),

                                Professor.builder()
                                                .nome("Jubileu Gomes")
                                                .email("Pf93090@fiap.com.br")
                                                .senha("12345678")
                                                .instituicao("Fiap")
                                                .build(),

                                Professor.builder()
                                                .nome("Thiago Yamoto")
                                                .email("pf97@fiap.com.br")
                                                .senha("12345678")
                                                .instituicao("Fiap")
                                                .build()));

                provaRepository.saveAll(List.of(

                                Prova.builder()
                                                .descricao("Prova de Matemática")
                                                .urlAcesso("www.fiap.com.br/matematica")
                                                .data(LocalDate.now())
                                                .ativo(true)
                                                .build(),

                                Prova.builder()
                                                .descricao("Prova de Java")
                                                .urlAcesso("www.fiap.com.br/java")
                                                .data(LocalDate.now())
                                                .ativo(true)
                                                .build(),

                                Prova.builder()
                                                .descricao("Prova de DataBase")
                                                .urlAcesso("www.fiap.com.br/database")
                                                .data(LocalDate.now())
                                                .ativo(true)
                                                .build()));

        }
}
