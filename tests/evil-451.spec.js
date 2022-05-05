
  describe("some-evil-spec=451", () => {
    it("evil-block-451", () => {
      window.evil_451 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  