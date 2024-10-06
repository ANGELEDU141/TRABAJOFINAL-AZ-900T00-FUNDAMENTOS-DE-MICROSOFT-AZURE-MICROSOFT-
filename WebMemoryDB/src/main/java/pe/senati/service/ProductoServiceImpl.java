package pe.senati.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pe.senati.entity.Producto;
import pe.senati.repository.ProductoRepository;

@Service
public class ProductoServiceImpl implements ProductoService{
	
	@Autowired
	private ProductoRepository springData;
	
	public ProductoServiceImpl() {}

	@Override
	@Transactional
	public void insert(Producto producto) {
		springData.save(producto);
		
	}

	@Override
	@Transactional
	public void update(Producto producto) {
		springData.save(producto);
		
	}

	@Override
	@Transactional
	public void delete(Integer producto_id) {
		
		springData.deleteById(producto_id);
	}

	@Override
	@Transactional(readOnly = true)
	public Producto findById(Integer producto_id) {

		return springData.findById(producto_id).orElse(null);	
	}

	@Override
	@Transactional(readOnly = true)
	public Collection<Producto> findAll() {
		
		return springData.findAll();
	}

}
