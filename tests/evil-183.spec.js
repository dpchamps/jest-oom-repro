
  describe("some-evil-spec=183", () => {
    it("evil-block-183", () => {
      window.evil_183 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  