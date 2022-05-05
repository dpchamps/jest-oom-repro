
  describe("some-evil-spec=428", () => {
    it("evil-block-428", () => {
      window.evil_428 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  