package pe.senati.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import pe.senati.entity.Producto;
import pe.senati.service.ProductoService;

@Controller
@RequestMapping("/producto")
public class ProductoController {
	
	public ProductoController() {}

	@Autowired
	@Qualifier("productoServiceImpl")
	private ProductoService productoService;
		
	@GetMapping("/listar")
	public String listar_GET(Map map) 
	{
		map.put("bproductos", productoService.findAll());
		
		return "Producto/listar";
	}

	@GetMapping("/registrar")
	public String registrar_GET(Model model)
	{

		//entidad NULL o vacio para mandarlo a la pagina y reciba lo datos
		Producto productoModel= new Producto(); //tiene que haber un constructor vacio para que pueda recibi la entidad producto y luego enviarlo con sus varibles mediante otro constructor

		//modelo llave - valor
		model.addAttribute("producto",productoModel);



		return "Producto/registrar";
	}

	//despues del get que reciba la entidad nula con datos ya llenado se va al registrar_POST y despues llamar al servicio con su metodo insert.
	@PostMapping("/registrar")
	public String registrar_POST(Producto producto)
	{
		//System.out.println(producto.getNombre());

		//entidad Cargado
			productoService.insert(producto); //


		return "redirect:/producto/listar";
	}
	
	@GetMapping("/detalle/{producto_id}")
	public String detalle_GET(Model model,@PathVariable Integer producto_id)
	{
		Producto productoDb = productoService.findById(producto_id);
		
		//entidad LOad
		model.addAttribute("producto",productoDb);
		
		return "Producto/detalle";
	}
	
	
	
	
	@GetMapping("editar/{producto_id}")
	public String editar_GET(Model model,@PathVariable Integer producto_id)
	{
		//entidad buscada por ID
		Producto productoDb = productoService.findById(producto_id);
		
		//entidad LOad
		model.addAttribute("producto",productoDb);
		
		return "Producto/editar";
	}
	
	
	@PostMapping("editar/{producto_id}")
	public String editar_POST(Producto producto)
	{
		//entidad actualizada
		productoService.update(producto);
		
		//mostrar productos
		return "redirect:/producto/listar";
	}
	
	
	
	@GetMapping("/borrar/{producto_id}")
	public String borrar_GET(Model model,@PathVariable Integer producto_id) 
	{
		//entidad buscada por ID
				Producto productoDb = productoService.findById(producto_id);
				
				//entidad LOad
				model.addAttribute("producto",productoDb);
				
				return "Producto/borrar";	
	}
	
	@PostMapping("/borrar/{producto_id}")
	public String borrar_POST(Producto producto)
	{
		//entidad actualizada
		productoService.delete(producto.getProducto_id());
		
		//mostrar productos
		return "redirect:/producto/listar";
	}
	
	
	
	
	
	

}
