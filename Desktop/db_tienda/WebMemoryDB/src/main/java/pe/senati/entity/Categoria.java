package pe.senati.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name="categorias")
public class Categoria implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer categoria_id;

	@Column
	private String descripcion;

	@OneToOne
	@JoinColumn(name = "jefe_id",unique = true,nullable = false)
	private Jefe jefe;

	@OneToMany(mappedBy = "categoria")
	private Collection<Producto> itemsProducto=new ArrayList<>();


	public Categoria() {}

	public Categoria(Integer categoria_id, String descripcion) {
		this.categoria_id = categoria_id;
		this.descripcion = descripcion;
	}

	public Integer getCategoria_id() {
		return categoria_id;
	}

	public void setCategoria_id(Integer categoria_id) {
		this.categoria_id = categoria_id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Jefe getJefe() {
		return jefe;
	}

	public void setJefe(Jefe jefe) {
		this.jefe = jefe;
	}

	public Collection<Producto> getItemsProducto() {
		return itemsProducto;
	}

	public void setItemsProducto(Collection<Producto> itemsProducto) {
		this.itemsProducto = itemsProducto;
	}

}
