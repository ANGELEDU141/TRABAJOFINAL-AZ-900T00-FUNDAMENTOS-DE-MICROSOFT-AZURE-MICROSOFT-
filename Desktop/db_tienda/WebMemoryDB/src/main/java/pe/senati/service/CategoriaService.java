package pe.senati.service;

import pe.senati.entity.Categoria;

import java.util.Collection;
public interface CategoriaService {

    public abstract void insert(Categoria categoria);
    public abstract void update(Categoria categoria);
    public abstract void delete(Integer categoria_id);
    public abstract Categoria findById(Integer categoria_id);
    public abstract Collection<Categoria> findAll();
}
