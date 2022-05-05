
  describe("some-evil-spec=715", () => {
    it("evil-block-715", () => {
      window.evil_715 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  