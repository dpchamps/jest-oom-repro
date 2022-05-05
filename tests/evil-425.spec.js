
  describe("some-evil-spec=425", () => {
    it("evil-block-425", () => {
      window.evil_425 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  