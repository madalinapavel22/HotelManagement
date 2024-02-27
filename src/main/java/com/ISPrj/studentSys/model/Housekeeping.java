package com.ISPrj.studentSys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Housekeeping {
    @Id
    private Integer RoomNb;
    private Integer cleanDone;
    private Integer poolDone;
    private Integer miniBarDone;
    private Integer extraThingsDone;

}
