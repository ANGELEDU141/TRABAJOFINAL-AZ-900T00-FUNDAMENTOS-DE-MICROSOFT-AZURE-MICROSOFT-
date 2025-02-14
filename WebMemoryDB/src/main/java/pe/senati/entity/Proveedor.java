package pe.senati.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="proveedores")
public class Proveedor implements Serializable
{
	private static final long serialVersionUID=1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer proveedor_id;

	@Column
	private String nombre;

	@Column(unique=true,nullable=false)
	private Long ruc;

	@Column
	private Integer telefono;

	@Column
	private String website;

	@ManyToMany(mappedBy="itemsProveedor")
	private Set<Producto> itemsProducto=new HashSet<>();

	public Proveedor() {}

	public Proveedor(Integer proveedor_id, String nombre, Long ruc, Integer telefono, String website) {
		this.proveedor_id = proveedor_id;
		this.nombre = nombre;
		this.ruc = ruc;
		this.telefono = telefono;
		this.website = website;
	}

	public Integer getProveedor_id() {
		return proveedor_id;
	}

	public void setProveedor_id(Integer proveedor_id) {
		this.proveedor_id = proveedor_id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Long getRuc() {
		return ruc;
	}

	public void setRuc(Long ruc) {
		this.ruc = ruc;
	}

	public Integer getTelefono() {
		return telefono;
	}

	public void setTelefono(Integer telefono) {
		this.telefono = telefono;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public Set<Producto> getItemsProducto() {
		return itemsProducto;
	}

	public void setItemsProducto(Set<Producto> itemsProducto) {
		this.itemsProducto = itemsProducto;
	}
}


