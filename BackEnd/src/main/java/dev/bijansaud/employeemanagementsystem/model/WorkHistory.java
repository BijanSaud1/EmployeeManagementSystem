package dev.bijansaud.employeemanagementsystem.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "Work_History")
public class WorkHistory {

    @Id
    private long id;

    @Column
    private String companyName;

    @Column
    private String employeerName;

    @Column
    private String address;

    @Column
    private String phoneNumber;

    @Column
    private Date startDate;

    @Column
    private Date endDate;
}
