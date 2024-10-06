package pe.senati.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "jefes")
public class Jefe implements Serializable{
	

	private static final long serialVersionUID = 1L;

	public Jefe() {}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer jefe_id;
	
	@Column
	private String nombre;	
	
	@Column
	private String apellido;
	
	@Column
	private String nacionalidad;
	
	@Column(unique = true, nullable = false)
	private Integer nro_celular;
	
	@OneToOne(mappedBy = "jefe")
	private Categoria categoria;

	public Jefe(Integer jefe_id, String nombre, String apellido, String nacionalidad, Integer nro_celular) {
		this.jefe_id = jefe_id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.nacionalidad = nacionalidad;
		this.nro_celular = nro_celular;
	}

	public Integer getJefe_id() {
		return jefe_id;
	}

	public void setJefe_id(Integer jefe_id) {
		this.jefe_id = jefe_id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getNacionalidad() {
		return nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}

	public Integer getNro_celular() {
		return nro_celular;
	}

	public void setNro_celular(Integer nro_celular) {
		this.nro_celular = nro_celular;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	
	
	
}
