
  describe("some-evil-spec=633", () => {
    it("evil-block-633", () => {
      window.evil_633 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  