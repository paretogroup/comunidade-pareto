function getPayAmount() { 
  let result;

  if (isDead) 
    result = deadAmount();
  else { 
    if (isSeparated) 
      result = separatedAmount();
    else { 
      if (isRetired) 
        result = retiredAmount(); 
    else 
      result = normalPayAmount() ; 
    }
  }
  
  return result;
}