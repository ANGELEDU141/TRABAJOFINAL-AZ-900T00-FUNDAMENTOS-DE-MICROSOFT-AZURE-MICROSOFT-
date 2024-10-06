package pe.senati.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pe.senati.entity.Categoria;

//spring data
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {



}
