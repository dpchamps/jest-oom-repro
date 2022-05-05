
  describe("some-evil-spec=703", () => {
    it("evil-block-703", () => {
      window.evil_703 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  