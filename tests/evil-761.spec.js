
  describe("some-evil-spec=761", () => {
    it("evil-block-761", () => {
      window.evil_761 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  