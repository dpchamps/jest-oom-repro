
  describe("some-evil-spec=15", () => {
    it("evil-block-15", () => {
      window.evil_15 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  