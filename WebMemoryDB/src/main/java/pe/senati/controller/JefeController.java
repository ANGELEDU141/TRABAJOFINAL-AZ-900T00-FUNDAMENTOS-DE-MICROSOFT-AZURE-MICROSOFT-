package pe.senati.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.senati.entity.Jefe;
import pe.senati.service.JefeService;

import java.util.Map;

@Controller
@RequestMapping("/jefe")
public class JefeController {

    @Autowired
    @Qualifier("jefeServiceImpl")
    private JefeService jefeService;

    public JefeController() {

    }

    @GetMapping("/listar")
    public String listar_GET(Map map) {
        map.put("bjefes", jefeService.findAll());
        return "Jefe/listar";
    }

    @GetMapping("/registrar")
    public String registrar_GET(Model model) {
        Jefe jefeModel = new Jefe();
        model.addAttribute("jefe", jefeModel);
        return "Jefe/registrar";
    }

    @PostMapping ("/registrar")
    public String registrar_POST(Jefe jefe) {
        jefeService.insert(jefe);
        return "redirect:/jefe/listar";
    }

    @GetMapping("/detalle/{jefe_id}")
    public String detalle_GET(Model model, @PathVariable Integer jefe_id) {
        Jefe jefeDb = jefeService.findById(jefe_id);
        model.addAttribute("jefe", jefeDb);
        return "Jefe/detalle";
    }
    @GetMapping("editar/{jefe_id}")
    public String actualizar_GET(Model model, @PathVariable Integer jefe_id) {
        Jefe jefeDb = jefeService.findById(jefe_id);
        model.addAttribute("jefe", jefeDb);
        return "Jefe/edit";
    }

    @PostMapping("editar/{jefe_id}")
    public String actualizar_POST(Jefe jefe) {
        jefeService.update(jefe);
        return "redirect:/jefe/listar";
    }


    @GetMapping("/borrar/{jefe_id}")
    public String borrar_GET(Model model, @PathVariable Integer jefe_id) {
        Jefe jefeDb = jefeService.findById(jefe_id);
        model.addAttribute("jefe", jefeDb);
        return "Jefe/borrar";
    }
    @PostMapping("/borrar/{jefe_id}")
    public String borrar_POST(Jefe jefe) {
        jefeService.delete(jefe.getJefe_id());
        return "redirect:/jefe/listar";
    }
    }


