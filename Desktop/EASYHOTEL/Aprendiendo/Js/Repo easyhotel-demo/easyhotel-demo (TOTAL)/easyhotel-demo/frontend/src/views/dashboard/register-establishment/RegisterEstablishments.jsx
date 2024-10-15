import React from 'react';
import styles from './register-establishment.module.css';

export default function RegisterEstablishments() {
  return (
    <div className={styles.registerEstablishment}>
      <h2 className={styles.heading}>Registrar Establecimientos</h2>

      <form id="establishment-form">
        <div className={styles.formGroup}>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="type">Tipo:</label>
          <input type="text" id="type" name="type" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Dirección:</label>
          <input type="text" id="address" name="address" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="photo">Foto:</label>
          <input type="file" id="photo" name="photo" accept="image/*" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="businessId">ID de Negocio:</label>
          <input type="text" id="businessId" name="business_id" required />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit">Registrar Establecimiento</button>
        </div>
      </form>
    </div>
  );
}
