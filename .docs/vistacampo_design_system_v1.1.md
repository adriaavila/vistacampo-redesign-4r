
# Vistacampo — Design System
Versión 1.1  
Dirección visual: lujo terapéutico, naturaleza, calma, exclusividad y confianza clínica.

---

# 1. Principios de marca

Vistacampo debe sentirse:

- Humano
- Premium
- Terapéutico
- Natural
- Confiable

Debe transmitir:

- calma
- recuperación
- privacidad
- contención
- cuidado experto

Evitar:

- estética hospitalaria fría
- branding corporativo duro
- wellness genérico
- colores saturados


---

# 3. Paleta alternativa — Verde & Vino Tinto

Esta paleta añade profundidad emocional y sofisticación.

## Base

| Token | Hex | Uso |
|---|---|---|
| base-light | #FAFAFA | fondo principal |
| base-ivory | #F6F2EC | hero |
| base-beige | #EDE6DD | secciones |

## Verde (identidad)

| Token | Hex |
|---|---|
| green-primary | #1A3628 |
| green-deep | #0F241A |
| green-soft | #2E5A46 |

## Vino tinto (acento emocional)

| Token | Hex |
|---|---|
| wine-primary | #6B1F2B |

## Acentos premium

| Token | Hex |
|---|---|
| gold | #BFA15F |
| bronze | #A67C52 |

---

# 4. Gradientes

Hero premium:

```css
linear-gradient(135deg,#1A3628 0%,#6B1F2B 100%);
```

Hero oscuro:

```css
linear-gradient(135deg,#0F241A 0%,#4A141C 100%);
```

---

# 5. Tipografía

Sistema recomendado:

| Uso | Fuente |
|---|---|
| Títulos | Playfair Display |
| Texto | Inter |
| UI / botones | DM Sans |

Escala:

| Estilo | Tamaño |
|---|---|
| H1 | 64px |
| H2 | 42px |
| H3 | 24px |
| Body | 18px |
| Small | 14px |

---

# 6. Sistema de botones

## Botón primario

Fondo

```
#1A3628
```

Texto

```
#FAFAFA
```

Hover

```
#6B1F2B
```

## Botón secundario

Borde

```
1px solid #1A3628
```

Hover

```
background:#1A3628
color:#FAFAFA
```

---

# 7. Formularios

Altura campo

```
52px
```

Borde

```
1px solid #DCD8D1
```

Focus

```
border:#1A3628
```

---

# 8. Estilo de imágenes

Características:

- luz natural
- colores cálidos
- vegetación
- interiores elegantes
- ambiente tranquilo

Evitar:

- hospitales
- stock genérico
- dramatismo excesivo

Prompt ejemplo:

```
luxury therapeutic retreat center, warm natural light, minimalist architecture, wooden textures, garden view, premium wellness clinic photography
```

---

# 9. Layout de landing page

Estructura:

1 Hero  
2 Confianza  
3 Instalaciones  
4 Proceso  
5 Programas  
6 Testimonios  
7 FAQ  
8 CTA final  

Hero ejemplo:

Título

```
Recuperar tu vida es posible
```

Subtítulo

```
Estamos aquí para ayudarte con un tratamiento confidencial y profesional
```

CTA

```
Agendar evaluación
```

---

# 10. Variables CSS

```css
:root{

--base-light:#FAFAFA;
--base-ivory:#F6F2EC;
--base-beige:#EDE6DD;

--green-primary:#1A3628;
--green-deep:#0F241A;
--green-soft:#2E5A46;

--wine-primary:#6B1F2B;
--wine-deep:#4A141C;
--wine-soft:#8C3A47;

--accent-gold:#BFA15F;
--accent-bronze:#A67C52;

}
```

---

# 11. Resumen

Identidad visual basada en:

- verde bosque (sanación)
- vino tinto (profundidad humana)
- marfil (calma)
- dorado (exclusividad)

Tipografía:

- Playfair Display
- Inter
- DM Sans

Experiencia:

- calma
- confianza
- privacidad
- lujo terapéutico
