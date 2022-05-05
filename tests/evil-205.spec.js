
  describe("some-evil-spec=205", () => {
    it("evil-block-205", () => {
      window.evil_205 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  