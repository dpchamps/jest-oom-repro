
  describe("some-evil-spec=318", () => {
    it("evil-block-318", () => {
      window.evil_318 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  