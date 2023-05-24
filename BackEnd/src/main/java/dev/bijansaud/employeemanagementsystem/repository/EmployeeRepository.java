package dev.bijansaud.employeemanagementsystem.repository;

import dev.bijansaud.employeemanagementsystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
