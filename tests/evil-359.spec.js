
  describe("some-evil-spec=359", () => {
    it("evil-block-359", () => {
      window.evil_359 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  