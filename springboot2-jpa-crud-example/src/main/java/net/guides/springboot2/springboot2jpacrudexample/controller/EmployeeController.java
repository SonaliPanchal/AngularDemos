package net.guides.springboot2.springboot2jpacrudexample.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.guides.springboot2.springboot2jpacrudexample.model.Employee;
import net.guides.springboot2.springboot2jpacrudexample.repository.EmployeeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")//for enabling cross domain request accept
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepo;
	
	Employee employee = null;
	
	@RequestMapping("/hello")//for testing
	public String sayHello()
	{
		return "hello my boot is working";
	}
	
	@GetMapping("/employees")//for getting all list of employee
	public List<Employee> getAllEmployeeDetails()
	{
		return employeeRepo.findAll();	
	}

	@GetMapping("employees/{id}")//find employee by id
	public ResponseEntity<Employee> getEmployeeDetailsById(@PathVariable(value="id") long employeId)
	{
		employee = employeeRepo.findById(employeId).get();//making optional object to actual object for handling null pointer exception
		return ResponseEntity.ok().body(employee);
		
	}
	@PostMapping("/employees")//create new employee
	public Employee createEmployee(@Valid @RequestBody Employee employee )
	{
		return employeeRepo.save(employee);
		
	}
	@PutMapping("/employees/{id}")//updating a employee by fetching id
	public ResponseEntity<Employee> updateEmplolyeeDetailsById(@PathVariable(name="id")long employeeId,
			@Valid @RequestBody Employee employee)
	{
		Employee employeeDetail  = employeeRepo.findById(employeeId).get();
		employeeDetail.setFirstName(employee.getFirstName());
		employeeDetail.setLastName(employee.getLastName());
		employeeDetail.setEmailId(employee.getEmailId());
		final Employee updateEmployee = employeeRepo.save(employeeDetail);
		return ResponseEntity.ok().body(updateEmployee);
		
	}
	@DeleteMapping("/employees/{id}")//for deleting a record by id and return status
	public Map<String, Boolean> deleteEmployeeById(@PathVariable(value="id")long employeId)
	{
		employee = employeeRepo.findById(employeId).get();
		employeeRepo.delete(employee);
		Map<String,Boolean> response  = new HashMap<>();
		response.put("Deleted",Boolean.TRUE);
		return response;
		
	}
	
}
