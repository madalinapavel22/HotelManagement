package com.ISPrj.studentSys.service;

import org.springframework.http.HttpStatus;

public class ClientException extends RuntimeException {
    public String ClientException() {
        return "The client with this code doesn't exists";
    }
}
