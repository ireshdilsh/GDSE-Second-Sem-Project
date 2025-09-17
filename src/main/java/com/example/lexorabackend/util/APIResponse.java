package com.example.lexorabackend.util;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class APIResponse {
    private int status;
    private String message;
    private Object data;
}
