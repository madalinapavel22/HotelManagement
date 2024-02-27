package com.ISPrj.studentSys.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class StateRoom {
    @Id
    private Integer nbCamera;
    private boolean finished;
}