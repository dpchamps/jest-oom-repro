
  describe("some-evil-spec=324", () => {
    it("evil-block-324", () => {
      window.evil_324 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  