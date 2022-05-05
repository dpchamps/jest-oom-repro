
  describe("some-evil-spec=945", () => {
    it("evil-block-945", () => {
      window.evil_945 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  