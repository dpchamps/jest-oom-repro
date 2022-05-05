
  describe("some-evil-spec=234", () => {
    it("evil-block-234", () => {
      window.evil_234 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  