
  describe("some-evil-spec=60", () => {
    it("evil-block-60", () => {
      window.evil_60 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  