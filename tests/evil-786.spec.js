
  describe("some-evil-spec=786", () => {
    it("evil-block-786", () => {
      window.evil_786 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  