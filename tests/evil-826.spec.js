
  describe("some-evil-spec=826", () => {
    it("evil-block-826", () => {
      window.evil_826 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  