// utils/getPromoCode.js
import { promoCodes } from "./promoCodes";

export function getPromoCode() {
  // Получаем уже выданные промокоды из localStorage
  let usedCodes = JSON.parse(localStorage.getItem("usedPromoCodes")) || [];

  // Берём доступные промокоды
  const available = promoCodes.filter((code) => !usedCodes.includes(code));

  if (available.length === 0) return "Промокоды закончились";

  // Выбираем случайный код
  const randomIndex = Math.floor(Math.random() * available.length);
  const code = available[randomIndex];

  // Сохраняем его в localStorage
  usedCodes.push(code);
  localStorage.setItem("usedPromoCodes", JSON.stringify(usedCodes));

  // Сохраняем промокод для текущего пользователя
  localStorage.setItem("currentPromoCode", code);

  return code;
}

// Получение уже выданного промокода для повторного просмотра
export function getCurrentPromoCode() {
  return localStorage.getItem("currentPromoCode") || null;
}
