﻿using ChatEN.Data;
using System.Linq.Expressions;

namespace ChatEN.Services.GenericServices
{
    public interface IService<T> where T : class
    {
        public Task<List<T>> GetAllAsync(Expression<Func<T, bool>>? filter = null, bool tracked = true, string? includeProperites = null);

        public Task<T> GetAsync(Expression<Func<T, bool>> filter = null!, bool tracked = true,
            string? includeProperties = null);

        public Task CreateAsync(T entity);
        public Task UpdateAsync(T entity);
        public Task RemoveAsync(T entity);
        public Task SaveAsync();
        public ApplicationDbContext UnitOfWork();
        Task<int> GetLength();

    }
}
