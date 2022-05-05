
  describe("some-evil-spec=904", () => {
    it("evil-block-904", () => {
      window.evil_904 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  