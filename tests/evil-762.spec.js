
  describe("some-evil-spec=762", () => {
    it("evil-block-762", () => {
      window.evil_762 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  