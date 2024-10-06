package pe.senati.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.senati.entity.Categoria;
import pe.senati.repository.CategoriaRepository;

import java.util.Collection;
import java.util.List;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    public CategoriaServiceImpl() {}

    @Autowired
    private CategoriaRepository springData;

    @Override
    @Transactional
    public void insert(Categoria categoria) {
        springData.save(categoria);
    }

    @Override
    @Transactional
    public void update(Categoria categoria) {
        springData.save(categoria);

    }

    @Override
    @Transactional
    public void delete(Integer categoria_id) {
        springData.deleteById(categoria_id);
    }

    @Override
    @Transactional(readOnly = true)
    public Categoria findById(Integer categoria_id) {
        return springData.findById(categoria_id).orElse(null);
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<Categoria> findAll() {
        return springData.findAll();
    }
}
