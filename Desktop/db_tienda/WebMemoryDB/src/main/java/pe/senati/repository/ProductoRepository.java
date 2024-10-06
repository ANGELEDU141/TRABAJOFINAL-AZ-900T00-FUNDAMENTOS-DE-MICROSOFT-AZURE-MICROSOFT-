package pe.senati.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.senati.entity.Producto;


//spring data
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer>{
	


}
