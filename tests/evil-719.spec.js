
  describe("some-evil-spec=719", () => {
    it("evil-block-719", () => {
      window.evil_719 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  