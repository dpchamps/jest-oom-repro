
  describe("some-evil-spec=602", () => {
    it("evil-block-602", () => {
      window.evil_602 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  